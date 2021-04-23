import 'package:studeo_uai/core/core.dart';
import 'package:studeo_uai/shared/widgets/progress_indicator/progress_indicator_widget.dart';
import 'package:flutter/material.dart';

class QuizCardWidget extends StatelessWidget {
  final String title;
  final String completed;
  final String imageUrl;
  final double percent;
  final VoidCallback onTap;

  const QuizCardWidget(
      {Key? key,
      required this.title,
      required this.completed,
      required this.imageUrl,
      required this.onTap,
      required this.percent})
      : super(key: key);
  @override
  Widget build(BuildContext context) {
    final assetUrl = AppImages.getAssetUrl(imageUrl);
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppColors.white,
          border: Border.fromBorderSide(
            BorderSide(color: AppColors.border),
          ),
          borderRadius: BorderRadius.circular(10),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              child: Image.asset(assetUrl!),
              height: 40,
              width: 40,
            ),
            SizedBox(
              height: 24,
            ),
            Text(
              title,
              style: AppTextStyles.heading15,
            ),
            SizedBox(
              height: 24,
            ),
            Row(
              children: [
                Expanded(
                    flex: 1,
                    child: Text("$completed", style: AppTextStyles.body11)),
                Expanded(
                    flex: 4,
                    child: ProgressIndicatorWidget(
                      value: percent,
                    ))
              ],
            )
          ],
        ),
      ),
    );
  }
}
