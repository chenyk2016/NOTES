#include "stdio.h"

int main(int argc, char const *argv[]) {
  int price = 0;
  printf("请输入金额\n");
  scanf("%d", &price);
  int change = 100 - price;
  printf("找您%d元\n", change);
  return 0;
}
