let originComment = "写的真好";

const useComment = () => {
  const comment = originComment;
  /**
   * 重新赋值用户名称
   * @param {string} [newComment="写的真好"]
   */
  const setComment = (newComment = "写的真好") => {
    originComment = newComment;
    return originComment;
  };

  return [comment, setComment];
};

module.exports = useComment;
