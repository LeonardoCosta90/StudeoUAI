import 'package:studeo_uai/core/app_colors.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ShareButton extends StatelessWidget {
  final String label;
  final Color backgroundColor;
  final Color fontColor;
  final Color borderColor;
  final VoidCallback onTap;

  ShareButton.purple({required String label, required VoidCallback onTap})
      : this.backgroundColor = AppColors.purple,
        this.fontColor = AppColors.white,
        this.borderColor = AppColors.green,
        this.onTap = onTap,
        this.label = label;

  const ShareButton(
      {Key? key,
      required this.label,
      required this.backgroundColor,
      required this.fontColor,
      required this.borderColor,
      required this.onTap})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    return Container(
        height: 48,
        width: 240,
        child: TextButton(
            style: ButtonStyle(
                backgroundColor: MaterialStateProperty.all(backgroundColor),
                shape: MaterialStateProperty.all(
                  RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
                side:
                    MaterialStateProperty.all(BorderSide(color: borderColor))),
            onPressed: onTap,
            child: Text(
              label,
              style: GoogleFonts.notoSans(
                fontWeight: FontWeight.w500,
                color: fontColor,
                fontSize: 15,
              ),
            )));
  }
}
