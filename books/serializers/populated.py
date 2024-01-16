from .common import BookSerializer
from users.serializers.common import BookListUserSerializer

class BookListSerializer(BookSerializer):
  owner = BookListUserSerializer()
