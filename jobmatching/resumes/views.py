import io

from django.shortcuts import render
from django.shortcuts import redirect
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

FIELDS_OF_WORK = [
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

def upload(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            insert_resume(request.POST, request.user)
            messages.info(request, 'Resume uploaded')
        else:
            return redirect("login")
    return render(request, 'resumes/upload.html', {'fields_of_work': FIELDS_OF_WORK})

def insert_resume(request, user):
    resume = Resume(
        name = request["name"], 
        headline = request["headline"], 
        summary = request["summary"],
        location = request["location"],
        links = request["links"],
        recentFieldOfWork  = request["recentFieldOfWorkOther"],
        fieldsToExplore = request["fieldsOfWorkToExploreOther"],
        uploader = user)
    resume.save()
    print(request)

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