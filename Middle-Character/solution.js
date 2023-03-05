function getMiddle(s)
{
  const l = s.length;
  const size = l % 2 == 1 ? 0 : -1
  return s.substring(l/2 + size , l/2 + 1);
      
}