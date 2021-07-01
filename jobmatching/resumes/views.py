import io

from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from pdfminer.converter import TextConverter
from pdfminer.layout import LAParams
from pdfminer.pdfdocument import PDFDocument
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.pdfpage import PDFPage
from pdfminer.pdfparser import PDFParser
from resumes.models import Resume

def index(request):
    return render(request, 'resumes/index.html')

@login_required
def upload(request):
    if request.method == 'POST':
        file = request.FILES['file']
        if file.name.endswith('.pdf'):
            handle_pdf_upload(request.FILES['file'], request.user)
        else:
            messages.error(request, 'file format not supported')
    return render(request, 'resumes/upload.html')

def handle_pdf_upload(file, user):
    resume = Resume(name = file.name, content = convert_pdf_to_string(file), uploader = user)
    resume.save()

def convert_pdf_to_string(file):
    output_string = io.StringIO()
    with io.BytesIO(file.read()) as fp:
        parser = PDFParser(fp)
        doc = PDFDocument(parser)
        rsrcmgr = PDFResourceManager()
        device = TextConverter(rsrcmgr, output_string, laparams=LAParams())
        interpreter = PDFPageInterpreter(rsrcmgr, device)
        for page in PDFPage.create_pages(doc):
            interpreter.process_page(page)

    return(output_string.getvalue())