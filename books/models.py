from django.db import models

class Book(models.Model):
  title = models.CharField(max_length=100)
  author = models.CharField(max_length=100)
  description = models.CharField(max_length=600)
  genre = models.CharField(max_length=100)
  owner = models.ForeignKey(
    to='users.User',
    on_delete=models.CASCADE,
    related_name='books_owned'
  )

  def __str__(self):
    return f'{self.title} - {self.author}'
