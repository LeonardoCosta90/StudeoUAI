import 'package:studeo_uai/core/core.dart';
import 'package:studeo_uai/result/components/back_button.dart';
import 'package:studeo_uai/result/components/share_button.dart';
import 'package:flutter/material.dart';
import 'package:share_plus/share_plus.dart';

class ResultPage extends StatelessWidget {
  final String title;
  final int length;
  final int rightQuestions;
  const ResultPage({
    Key? key,
    required this.title,
    required this.length,
    required this.rightQuestions,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Image.asset(AppImages.trophy),
          SizedBox(height: 20),
          Center(
            child: Text(
              "Parabéns",
              style: AppTextStyles.heading40,
            ),
          ),
          SizedBox(height: 20),
          RichText(
            textAlign: TextAlign.center,
            text: TextSpan(
                text: "Você concluiu\n",
                style: AppTextStyles.body
                    .copyWith(fontWeight: FontWeight.w400, fontSize: 16),
                children: [
                  TextSpan(
                      text: "$title\n",
                      style: AppTextStyles.body
                          .copyWith(fontWeight: FontWeight.w600, fontSize: 16)),
                  TextSpan(text: " com $rightQuestions de $length acertos")
                ]),
          ),
          SizedBox(height: 80),
          ShareButton.purple(
              label: "Compartilhar",
              onTap: () {
                Share.share("Olhe a minha pontuação no DevQuiz!",
                    subject: "DevQuiz");
              }),
          SizedBox(height: 20),
          BackButtonWidget(
              onTap: () {
                Navigator.pop(context);
              },
              label: "Voltar ao início")
        ],
      ),
    );
  }
}
