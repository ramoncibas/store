const useKey = (): any => {
  
  const randomKey = (): number => {
    return (Math.random() * Math.random());
  };

  return {
    randomKey,
  }
}

export default useKey;
