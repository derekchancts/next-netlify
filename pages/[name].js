import { useRouter } from 'next/router';


const Name = () => {
  const router = useRouter();
  const { query } = router;
  // const query = router.query;
  console.log(query);
  // const name = router.query.name;
  const { name } = router.query;
  console.log(name)

  return (
    <div>
      <h1>Welcome { name }</h1>
    </div>
  )
}

export default Name
