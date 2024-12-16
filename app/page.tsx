import Toggle from "@/components/toggle/toggle";
import ColorSelect from "@/components/color-selector/color-select/color-select";
import Checkbox from "@/components/checkbox/checkbox";
import ProductWidget from "@/components/product-widget/product-widget";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <ProductWidget />
      </main>
    </div>
  );
}
