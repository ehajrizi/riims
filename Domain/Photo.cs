using System;

namespace Domain
{
    public class Photo
    {
        public string Id { get; set; }

        public string Url { get; set; }

        public object FirstOrDefault(Func<object, bool> p)
        {
            throw new NotImplementedException();
        }

        public void Add(Photo photo)
        {
            throw new NotImplementedException();
        }

        public void Remove(object photo)
        {
            throw new NotImplementedException();
        }








        // public bool IsMain { get; set; }
        // nuk na vyn se vetem nje foto bohet upload?
    }
}