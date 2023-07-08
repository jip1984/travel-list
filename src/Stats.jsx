export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Please start adding some items to your packing list</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "✈ You have everything packed enjoy ✈"
          : `💼 You have ${numItems} items on your list, and you have already packed items: ${numPacked}, this is (${percent}%) of your items`}
      </em>
    </footer>
  );
}
