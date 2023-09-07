const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div className={"flex justify-center items-center  sm:w-40 sm:h-40 rounded-xl max-sm:p-4 border-2  cursor-pointer" + `border-2 rounded-xl ${
      bigShoeImg === imgURL.bigShoe
        ? "border-coral-red"
        : "border-transparent"
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
      <img
        src={imgURL.thumbnail}
        alt="shoe collection"
        width={127}
        height={103.34}
        className="object-contain"
      />
    </div>
  );
};

export default ShoeCard;
