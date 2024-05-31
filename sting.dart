// void main() {
//   String name1 = "raghuveer";
//   Map<String, int> st = {};

//   List<String> nam2 = name1.split("");

//   for (var a in nam2) {
//     if (st.containsKey(a)) {
//       st[a] = st[a]! +1;
//     } else {
//       st[a] = 1;
//     }
//   }

//   print(st);
// }


 

void main() {
  String name = "raghuveer sonkar";
  List<String> st = name.split(' ');

  for (String b in st) {
    String varna = (b[0].toUpperCase() + b.substring(1));

    print(varna);
  }
}
