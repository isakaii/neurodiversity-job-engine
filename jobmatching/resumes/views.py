from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required
from .forms import PdfFileForm


def index(request):
    return render(request, 'resumes/index.html')

@login_required
def upload(request):
    if request.method == 'POST':
        print(request)
        print(request.FILES['pdfFile'])
        form = PdfFileForm(request.POST, request.FILES)
        print(form)
        if form.is_valid():
            print(form)
            handle_pdf_upload(request.FILES['pdfFile'])
    else:
        form = PdfFileForm()
    return render(request, 'resumes/upload.html')

def handle_pdf_upload(file):
    for chunk in f.chunks():
        print(chunk)