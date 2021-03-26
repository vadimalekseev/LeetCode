public class Codec
{
    readonly Dictionary<string, string> _dict = new Dictionary<string, string>();

    readonly char[] AvailableLetters =
    {
        'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c',
        'v', 'b', 'n', 'm', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K',
        'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '1', '2', '3', '4', '5', '6', '7', '8', '9'
    };

    readonly Random rnd = new Random();

    // Encodes a URL to a shortened URL
    public string encode(string longUrl)
    {
        var randomUniquePath = generateUniquePath();
        _dict.Add(randomUniquePath, longUrl);
        return randomUniquePath;
    }

    // Decodes a shortened URL to its original URL.
    public string decode(string shortUrl)
    {
        if (_dict.ContainsKey(shortUrl))
            return _dict[shortUrl];
        return null;
    }

    public string generateUniquePath()
    {
        var attempts = 1;

        var urlPathCharsCount = attempts + 4;
        while (true)
        {
            var resultChars = new char[urlPathCharsCount];
            for (var i = 0; i < urlPathCharsCount; i++)
                resultChars[i] = AvailableLetters[rnd.Next(0, AvailableLetters.Length)];
            var strResult = string.Join("", resultChars);

            if (!_dict.ContainsKey(strResult)) return strResult;

            attempts++;
        }
    }
}