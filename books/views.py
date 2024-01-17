from rest_framework.generics import RetrieveUpdateDestroyAPIView
from .models import Book
from .serializers.common import BookSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .serializers.populated import BookListSerializer
from lib.views import OwnerListCreateView
from lib.permissions import IsOwnerOrReadOnly


# Path: /books/
# Methods: GET, POST
class BookListCreateView(OwnerListCreateView):
  queryset = Book.objects.all()
  permission_classes = [IsAuthenticatedOrReadOnly]

  def get_serializer_class(self):
    if self.request.method == 'GET':
      return BookListSerializer
    return BookSerializer
  
# Path: /books/:pk
# Methods: GET, PUT, PATCH, DELETE

class BookDetailView(RetrieveUpdateDestroyAPIView):
  queryset = Book.objects.all()
  permission_classes = [IsOwnerOrReadOnly]
    
  def get_serializer_class(self):
    if self.request.method == 'GET':
      return BookListSerializer
    else:
      return BookSerializer
    

  def get_serializer_class(self):
    if self.request.method == 'PUT':
      return BookSerializer
    return BookListSerializer