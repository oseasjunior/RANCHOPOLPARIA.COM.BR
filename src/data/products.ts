import maracujaImg from "@/assets/fruits/maracuja.jpg";
import acerolaImg from "@/assets/fruits/acerola.jpg";
import mangaImg from "@/assets/fruits/manga.jpg";
import goiabaImg from "@/assets/fruits/goiaba.jpg";
import morangoImg from "@/assets/fruits/morango.jpg";
import abacaxiImg from "@/assets/fruits/abacaxi.jpg";
import cajaImg from "@/assets/fruits/caja.jpg";
import cupuacuImg from "@/assets/fruits/cupuacu.jpg";

export interface Product {
  id: string;
  name: string;
  colorClass: string;
  bgClass: string;
  emoji: string;
  image: string;
  weight: string;
  description: string;
  nutrition: {
    calories: string;
    carbs: string;
    protein: string;
    fat: string;
    fiber: string;
    vitaminC: string;
  };
}

export const products: Product[] = [
  {
    id: "maracuja",
    name: "Maracujá",
    colorClass: "text-fruit-maracuja",
    bgClass: "bg-fruit-maracuja/20",
    emoji: "🍈",
    image: maracujaImg,
    weight: "1kg",
    description: "Polpa de maracujá 100% natural, ideal para sucos, mousses e sobremesas. Sabor intenso e refrescante.",
    nutrition: { calories: "68 kcal", carbs: "12g", protein: "1.2g", fat: "0.4g", fiber: "1.1g", vitaminC: "20mg" },
  },
  {
    id: "acerola",
    name: "Acerola",
    colorClass: "text-fruit-acerola",
    bgClass: "bg-fruit-acerola/20",
    emoji: "🍒",
    image: acerolaImg,
    weight: "1kg",
    description: "Rica em vitamina C, a polpa de acerola é perfeita para fortalecer a imunidade com sabor tropical.",
    nutrition: { calories: "33 kcal", carbs: "8g", protein: "0.4g", fat: "0.2g", fiber: "1.1g", vitaminC: "1677mg" },
  },
  {
    id: "manga",
    name: "Manga",
    colorClass: "text-fruit-manga",
    bgClass: "bg-fruit-manga/20",
    emoji: "🥭",
    image: mangaImg,
    weight: "1kg",
    description: "Polpa de manga doce e cremosa, perfeita para smoothies, sorvetes e vitaminas.",
    nutrition: { calories: "64 kcal", carbs: "17g", protein: "0.5g", fat: "0.3g", fiber: "1.8g", vitaminC: "27mg" },
  },
  {
    id: "goiaba",
    name: "Goiaba",
    colorClass: "text-fruit-goiaba",
    bgClass: "bg-fruit-goiaba/20",
    emoji: "🍑",
    image: goiabaImg,
    weight: "1kg",
    description: "Polpa de goiaba com sabor marcante, ótima para sucos, doces e geleias caseiras.",
    nutrition: { calories: "54 kcal", carbs: "12g", protein: "1g", fat: "0.4g", fiber: "5.4g", vitaminC: "80mg" },
  },
  {
    id: "morango",
    name: "Morango",
    colorClass: "text-fruit-morango",
    bgClass: "bg-fruit-morango/20",
    emoji: "🍓",
    image: morangoImg,
    weight: "1kg",
    description: "Polpa de morango saborosa e aromática, ideal para vitaminas, sorvetes e sobremesas.",
    nutrition: { calories: "30 kcal", carbs: "7g", protein: "0.6g", fat: "0.3g", fiber: "1.8g", vitaminC: "64mg" },
  },
  {
    id: "abacaxi",
    name: "Abacaxi",
    colorClass: "text-fruit-abacaxi",
    bgClass: "bg-fruit-abacaxi/20",
    emoji: "🍍",
    image: abacaxiImg,
    weight: "1kg",
    description: "Polpa de abacaxi tropical e refrescante, perfeita para sucos e drinks naturais.",
    nutrition: { calories: "48 kcal", carbs: "12g", protein: "0.5g", fat: "0.1g", fiber: "1.4g", vitaminC: "34mg" },
  },
  {
    id: "caja",
    name: "Cajá",
    colorClass: "text-fruit-caja",
    bgClass: "bg-fruit-caja/20",
    emoji: "🟠",
    image: cajaImg,
    weight: "1kg",
    description: "Polpa de cajá com sabor único do nordeste brasileiro, azedinho e irresistível.",
    nutrition: { calories: "46 kcal", carbs: "11g", protein: "0.6g", fat: "0.3g", fiber: "1g", vitaminC: "28mg" },
  },
  {
    id: "cupuacu",
    name: "Cupuaçu",
    colorClass: "text-fruit-cupuacu",
    bgClass: "bg-fruit-cupuacu/20",
    emoji: "🟤",
    image: cupuacuImg,
    weight: "1kg",
    description: "Polpa de cupuaçu, fruta amazônica com sabor exótico, ideal para cremes, sucos e sorvetes.",
    nutrition: { calories: "49 kcal", carbs: "10g", protein: "1.2g", fat: "0.5g", fiber: "2.6g", vitaminC: "24mg" },
  },
];
