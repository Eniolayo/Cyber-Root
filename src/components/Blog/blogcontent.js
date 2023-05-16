import { Text } from "../ui";

export default function BlogContent({ content }) {
  console.log(content, "con");
  return (
    <section className="space-y-10 indent-9 max-w-[1500px] w-[80%] mx-auto py-10">
      <Text variant={"lg"} content={addLineBreaks(content)} />
    </section>
  );
}
const addLineBreaks = (text) => {
  return text.replace(/\n/g, "<br/>");
};
