export default function YourAwesomeIdea({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div>
      <p>{params.slug}</p>
    </div>
  );
}
