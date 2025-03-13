import { useEffect, useState } from "react";

export default function AlbumGallery() {
  const [photos, setPhotos] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        setPhotos(data);
        const groupedAlbums = data.reduce((acc, photo) => {
          if (!acc[photo.albumId]) {
            acc[photo.albumId] = [];
          }
          acc[photo.albumId].push(photo);
          return acc;
        }, {});
        setAlbums(groupedAlbums);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-4">Photo Albums</h1>
      {selectedAlbum === null ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.keys(albums).map((albumId) => (
            <div
              key={albumId}
              className="p-4 bg-blue-200 rounded-lg cursor-pointer text-center"
              onClick={() => setSelectedAlbum(albumId)}
            >
              <h2 className="text-xl font-semibold">Album {albumId}</h2>
              <img
                src={albums[albumId][0].thumbnailUrl}
                alt="Album cover"
                className="mx-auto mt-2 rounded-md"
              />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button
            className="mb-4 p-2 bg-red-500 text-white rounded"
            onClick={() => setSelectedAlbum(null)}
          >
            Back to Albums
          </button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {albums[selectedAlbum].map((photo) => (
              <div key={photo.id} className="p-2">
                <img
                  src={photo.thumbnailUrl}
                  alt={photo.title}
                  className="w-full rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
