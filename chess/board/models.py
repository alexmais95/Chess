from django.db import models

class User(models.Model):
    login = models.CharField(max_length=100)
    mail = models.EmailField(max_length=100)


class Statistic(models.Model):
    user_name = models.ForeignKey(User, on_delete=models.CASCADE)
    numb_game = models.IntegerField()
    won_game = models.IntegerField()
    lost_game = models.IntegerField()

