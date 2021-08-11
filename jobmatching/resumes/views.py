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

RECENT_FIELD_OF_WORKS = [
    "Agriculture, Food & Natural Resources",
    "Arts, Audio/Video Technology & Communications",
    "Business Management & Administration",
    "Education & Training",
    "Finance",
    "Government & Public Administration",
    "Health Science",
    "Hospitality & Tourism",
    "Human Services",
    "Information Technology",
    "Law, Public Safety, Corrections & Security",
    "Manufacturing",
    "Marketing",
    "Science, Technology, Engineering & Mathematics",
    "Transportation, Distribution & Logistics",

]

def index(request):
    return render(request, 'resumes/index.html')

@login_required
def upload(request):
    if request.method == 'POST':
        insert_resume(request.POST, request.user)
        messages.info(request, 'Resume uploaded')
    return render(request, 'resumes/upload.html', {'recent_fields_of_work': RECENT_FIELD_OF_WORKS})

def insert_resume(request, user):
    print(request)

# def handle_pdf_upload(file, user):
#     resume = Resume(name = file.name, content = convert_pdf_to_string(file), uploader = user)
#     resume.save()

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