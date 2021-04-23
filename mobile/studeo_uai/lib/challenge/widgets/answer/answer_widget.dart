import 'package:studeo_uai/core/core.dart';
import 'package:studeo_uai/shared/models/answer_model.dart';
import 'package:flutter/material.dart';

class AnswerWidget extends StatelessWidget {
  final AnswerModel answer;
  final ValueChanged<bool> onTap;
  final bool isSelected;
  final bool disabled;

  const AnswerWidget({
    Key? key,
    required this.answer,
    this.isSelected = false,
    required this.onTap,
    required this.disabled,
  }) : super(key: key);

  //colors getters
  Color get _selectedColorRight =>
      answer.isRight ? AppColors.darkGreen : AppColors.darkRed;

  Color get _selectedBorderRight =>
      answer.isRight ? AppColors.lightGreen : AppColors.lightRed;

  Color get _selectedColorCardRight =>
      answer.isRight ? AppColors.lightGreen : AppColors.lightRed;

  Color get _selectedBorderCardRight =>
      answer.isRight ? AppColors.green : AppColors.red;

  TextStyle get _selectedTextStyleRight =>
      answer.isRight ? AppTextStyles.bodyDarkGreen : AppTextStyles.bodyDarkRed;

  IconData get _selectedIconRight => answer.isRight ? Icons.check : Icons.close;

  @override
  Widget build(BuildContext context) {
    return IgnorePointer(
      ignoring: disabled,
      child: GestureDetector(
        onTap: () {
          onTap(answer.isRight);
        },
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 24),
            decoration: BoxDecoration(
              color: isSelected ? _selectedColorCardRight : AppColors.white,
              borderRadius: BorderRadius.circular(10),
              border: Border.fromBorderSide(
                BorderSide(
                  color:
                      isSelected ? _selectedBorderCardRight : AppColors.border,
                ),
              ),
            ),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceEvenly,
              children: [
                Expanded(
                  child: Text(answer.title,
                      style: isSelected
                          ? _selectedTextStyleRight
                          : AppTextStyles.body),
                ),
                Container(
                    height: 24,
                    width: 24,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(12),
                      border: Border.fromBorderSide(BorderSide(
                          color: isSelected
                              ? _selectedBorderRight
                              : AppColors.border)),
                      color: isSelected ? _selectedColorRight : AppColors.white,
                    ),
                    child: isSelected
                        ? Icon(
                            _selectedIconRight,
                            color: AppColors.white,
                            size: 16,
                          )
                        : null),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
