import 'package:flutter/material.dart';
import 'package:studeo_uai/challenge/challenge_page.dart';
import 'package:studeo_uai/core/app_widget.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'StudeoUAI',
      debugShowCheckedModeBanner: false,
      home: ChallengePage(),
    );
  }
}
