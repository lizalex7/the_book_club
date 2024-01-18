from .serializers.common import CommentSerializer
from rest_framework.generics import CreateAPIView
from .models import Comment

class CommentCreateView(CreateAPIView):
  queryset = Comment.objects.all()
  serializer_class = CommentSerializer

