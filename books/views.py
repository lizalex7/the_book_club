from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Book
from .serializers.common import BookSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers.populated import BookListSerializer


# Path: /books/
# Methods: GET, POST
class BookListCreateView(ListCreateAPIView):
  queryset = Book.objects.all()
  permission_classes = [IsAuthenticatedOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return BookListSerializer
    return BookSerializer