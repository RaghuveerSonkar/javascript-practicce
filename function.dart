void main() {
  List<String> dates = [
    '01/6/2024',
    '28/5/2024',
    '25/12/2023',
    '12/11/1999',
    '29/6/2024'
  ];

  DateTime currentDate = DateTime.now();

  List<String> current = [];
  List<String> past = [];
  List<String> future = [];

  dates.forEach((dateStr) {
    // Split the date string and convert to numbers
    List<String> parts = dateStr.split('/');
    int day = int.parse(parts[0]);
    int month = int.parse(parts[1]);
    int year = int.parse(parts[2]);
    print({ day, month , year});

    // Create a DateTime object from the split components
    DateTime dateObj = DateTime(year, month, day);

    // Compare the dateObj with the current date
    if (dateObj.isBefore(currentDate)) {
      past.add(dateStr);
    } else if (dateObj==currentDate) {
      current.add(dateStr);
    } else {
      future.add(dateStr);
    }
  });

  print("Past dates: $past");
  print("Current dates: $current");
  print("Future dates: $future");
}
