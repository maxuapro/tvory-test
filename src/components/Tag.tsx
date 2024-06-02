const Tag = ({ tag }: { tag: string | undefined }) => {
  return (
    <div className="rounded-full bg-gradient-to-br from-fuchsia-700 to-purple-700 px-3">
      <p className="text-sm text-white">{tag}</p>
    </div>
  );
};

export default Tag;
