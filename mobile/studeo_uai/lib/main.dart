import 'package:flutter/material.dart';
import 'package:studeo_uai/challenge/challenge_page.dart';

import 'package:studeo_uai/home/home_page.dart';
import 'package:studeo_uai/splash/splash_page.dart';
//import 'package:devquiz/challenge/challenge_page.dart';
// import 'package:devquiz/splash/splash_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DevQuiz',
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}
