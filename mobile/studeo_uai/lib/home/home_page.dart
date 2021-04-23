import 'package:studeo_uai/challenge/challenge_page.dart';
import 'package:studeo_uai/home/home_controller.dart';
import 'package:studeo_uai/home/home_state.dart';
import 'package:studeo_uai/home/widgets/level_button/level_button_widget.dart';
import 'package:studeo_uai/home/widgets/quiz_card/quiz_card_widget.dart';
import 'package:studeo_uai/home/widgets/widgets.dart';
import 'package:flutter/material.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final controller = HomeController();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    controller.getQuizzes();
    controller.getUser();
    controller.stateNotifier.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    if (controller.state == HomeState.success) {
      return Scaffold(
        appBar: AppBarWidget(user: controller.user),
        body: Padding(
          padding: EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            children: [
              SizedBox(
                height: 24,
              ),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 8),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    LevelButtonWidget(
                      label: "Fácil",
                    ),
                    LevelButtonWidget(
                      label: "Médio",
                    ),
                    LevelButtonWidget(
                      label: "Difícil",
                    ),
                    LevelButtonWidget(
                      label: "Jedi",
                    ),
                  ],
                ),
              ),
              SizedBox(
                height: 24,
              ),
              Expanded(
                child: GridView.count(
                  crossAxisCount: 2,
                  scrollDirection: Axis.vertical,
                  crossAxisSpacing: 8,
                  mainAxisSpacing: 8,
                  shrinkWrap: true,
                  children: controller.quizzes!
                      .map((quiz) => QuizCardWidget(
                            percent:
                                quiz.questionsAnswered / quiz.questions.length,
                            imageUrl: quiz.image,
                            title: quiz.title,
                            completed:
                                "${quiz.questionsAnswered}/${quiz.questions.length}",
                            onTap: () {
                              Navigator.of(context).push(
                                MaterialPageRoute(
                                  builder: (context) => ChallengePage(
                                    questions: quiz.questions,
                                    title: quiz.title,
                                  ),
                                ),
                              );
                            },
                          ))
                      .toList(),
                ),
              )
            ],
          ),
        ),
      );
    } else {
      return Scaffold(
        body: Center(
          child: CircularProgressIndicator(),
        ),
      );
    }
  }
}
