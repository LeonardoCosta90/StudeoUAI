import 'package:flutter/material.dart';
import 'package:studeo_uai/home/home_page.dart';

class AppWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'StudeoUAI',
      debugShowCheckedModeBanner: false,
      home: HomePage(),
    );
  }
}
