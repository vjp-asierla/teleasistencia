from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from social_django.models import UserSocialAuth

# Create your views here.
def index(request):
    context = {}
    if request.user.is_authenticated:
        uidmio = request.user.email
        token = get_object_or_404(UserSocialAuth, uid=uidmio)
        context['token'] = token.extra_data
    return render(request, 'teleasistenciaIndex.html', context)