const photos = [
  {
    src:
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=500&auto=format&fit=crop",
    title: "Shibuya crossing",
    place: "Tokyo",
    no: "01"
  },
  {
    src:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=500&auto=format&fit=crop",
    title: "Torii at dusk",
    place: "Kyoto",
    no: "02"
  },
  {
    src:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=500&auto=format&fit=crop",
    title: "Mount Fuji, clear morning",
    place: "Yamanashi",
    no: "03"
  },
  {
    src:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=500&auto=format&fit=crop",
    title: "Shinkansen platform",
    place: "Tokyo",
    no: "04"
  },
  {
    src:
      "https://images.unsplash.com/photo-1480796927426-f609979314bd?q=80&w=500&auto=format&fit=crop",
    title: "Bamboo grove path",
    place: "Arashiyama",
    no: "05"
  },
  {
    src:
      "https://images.unsplash.com/photo-1542640244-7e672d6cef4e?q=80&w=500&auto=format&fit=crop",
    title: "Backstreet lanterns",
    place: "Osaka",
    no: "06"
  },
  {
    src:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=500&auto=format&fit=crop",
    title: "Snow monkeys, onsen",
    place: "Nagano",
function toggleDetails(targetId, btnElement) {
  const detailsElement = document.getElementById(targetId);
  
  if (detailsElement.classList.contains('show')) {
    detailsElement.classList.remove('show');
    btnElement.innerText = 'Show Details';
  } else {
    detailsElement.classList.add('show');
    btnElement.innerText = 'Hide Details';
  }
}
