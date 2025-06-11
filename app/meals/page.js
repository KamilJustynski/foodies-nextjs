import Link from "next/link";
const MealsPage = () => {
  return (
    <div>
      Meals Page
      <Link href={`/meals/blog-1`}>Blog 1</Link>
      <Link href={`/meals/blog-2`}>Blog 2</Link>
      <Link href={`/meals/blog-3`}>Blog 3</Link>
    </div>
  );
};

export default MealsPage;
