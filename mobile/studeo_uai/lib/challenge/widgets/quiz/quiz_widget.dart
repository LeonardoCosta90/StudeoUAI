import 'package:flutter/material.dart';

import 'package:studeo_uai/challenge/widgets/answer/answer_widget.dart';
import 'package:studeo_uai/core/core.dart';

class QuizWidget extends StatelessWidget {
  final String title;
  const QuizWidget({Key? key, required this.title}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Text(title, style: AppTextStyles.heading),
          ),
          SizedBox(height: 24),
          AnswerWidget(
            isRight: true,
            isSelected: true,
            title:
                'Possibilita a criação de aplicativos\ncompilados nativamente',
          ),
          AnswerWidget(
            isRight: false,
            isSelected: true,
            title: 'Kit de desenvolvimento de \n inteface de usuário',
          ),
          AnswerWidget(
            title: 'Acho que é uma marca de café\ndo Himalia',
          ),
          AnswerWidget(
            title: 'Possibilita a criação de desktops\nque são muito incríveis',
          ),
        ],
      ),
    );
  }
}
