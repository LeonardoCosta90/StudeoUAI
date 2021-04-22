import 'dart:convert';
import 'package:flutter/services.dart';

import 'package:studeo_uai/shared/models/quiz_model.dart';
import 'package:studeo_uai/shared/models/user_model.dart';

class HomeRepository {
  Future<UserModel> getUser() async {
    final response = await rootBundle.loadString('assets/database/user.json');
    final user = UserModel.fromJson(response);
    return user;
  }

  Future<List<QuizModel>> getQuizzes() async {
    final response =
        await rootBundle.loadString('assets/database/quizzes.json');
    final list = jsonDecode(response) as List;
    final quizzes = list.map((element) => QuizModel.fromMap(element)).toList();
    return quizzes;
  }
}
