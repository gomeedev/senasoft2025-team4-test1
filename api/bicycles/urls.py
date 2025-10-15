from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BicycleViewSet

router = DefaultRouter()
router.register(r'bicycles', BicycleViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
