from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.permissions import AllowAny
from rest_framework.generics import CreateAPIView
from .serializers import SignUpSerializer


class SignUpView(CreateAPIView):
    model = get_user_model()
    serializer_class = SignUpSerializer
    permission_classes = [AllowAny]
