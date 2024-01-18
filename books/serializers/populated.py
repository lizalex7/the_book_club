from .common import BookSerializer
from users.serializers.common import BookListUserSerializer
from comments.serializers.common import CommentSerializer

class BookListSerializer(BookSerializer):
  owner = BookListUserSerializer()

class PopulatedBookSerializer(BookSerializer):
  reviews = CommentSerializer(many=True)
