import 'package:studeo_uai/core/core.dart';
import 'package:flutter/material.dart';

class BackButtonWidget extends StatelessWidget {
  final VoidCallback onTap;
  final String label;

  const BackButtonWidget({Key? key, required this.onTap, required this.label})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        height: 48,
        width: 240,
        child: TextButton(
            onPressed: onTap,
            child: Text(label,
                style: AppTextStyles.body
                    .copyWith(fontSize: 15, fontWeight: FontWeight.w600))));
  }
}
