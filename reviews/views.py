from rest_framework.generics import CreateAPIView
from .serializers.common import ReviewSerializer
from .models import Review

class ReviewCreateView(CreateAPIView):
  queryset = Review.objects.all()
  serializer_class = ReviewSerializer
