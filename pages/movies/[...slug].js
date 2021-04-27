import { useRouter } from "next/router";

const Comment = () => {
  const router = useRouter();
  const slug = router.query.slug || [];

  return (
    <div>
      <h1>Slug: {slug.join("/")}</h1>
    </div>
  );
};

export default Comment;
