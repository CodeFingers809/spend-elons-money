const buySound = new Audio("./assets/cha-ching.mp3");
let totalAmount= 164000000000
let amountUsed = 0;
let amountLeft = 164000000000;
let percentUsed = 0;
let priceOfProduct;
let numberOfProduct;
let currentProduct;

//array of products
let products = [
  {
    valueNum: "prod1",
    name: "Nintendo Switch",
    image:
      "https://imgr.search.brave.com/n2G31Ty4SFok_n8svuGsdW4ZAKsJqJELCp7NdMFdyCA/fit/1200/1200/ce/1/aHR0cHM6Ly9pbWFn/ZXMubmludGVuZG9s/aWZlLmNvbS9uZXdz/LzIwMTgvMDcvdGhl/X25pbnRlbmRvX3N3/aXRjaF9pc19oZWFk/ZWRfdG9fdHVya2V5/X2J1dF93aWxsX2Nv/c3RfY3VzdG9tZXJz/X2FsbW9zdF91c2Q1/MDAvYXR0YWNobWVu/dC8wL29yaWdpbmFs/LmpwZw",
    price: 299,
    number: 0,
  },
  {
    valueNum: "prod2",
    name: "PS5",
    image:
      "https://imgr.search.brave.com/qKviNHrPL426jE6KT6stlUUYPyp3tz7xoCmBj8Wb-8k/fit/1200/1200/ce/1/aHR0cHM6Ly9hc3Nl/dHMucHJpbWFnYW1l/cy5jb20vbWVkaWEv/aW1hZ2VzL25ld3Mv/cHM1X3JlbGVhc2Vf/ZGF0ZV91cGRhdGUu/anBn",
    price: 499,
    number: 0,
  },
  {
    valueNum: "prod3",
    name: "Xbox series X",
    image:
      "https://imgr.search.brave.com/tcBSLxZOyzV9M6yQ2CZ5sXCZLHfzJBCgdaTTargYHSQ/fit/759/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/U1pSM0lLTTN3emUt/QzNndDd0ekZBSGFF/byZwaWQ9QXBp",
    price: 499,
    number: 0,
  },
  {
    valueNum: "prod4",
    name: "Iphone 12 pro max",
    image:
      "https://imgr.search.brave.com/uUaqQiuXq3VKj3TONrElh3l2E8UQnQxNfiTTtHbJ_g0/fit/905/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/UjRmbHk3VVk3RWd5/dkFrenp3eTZ3SGFE/NCZwaWQ9QXBp",
    price: 1399,
    number: 0,
  },
  {
    valueNum: "prod5",
    name: "Apple Ipad Pro",
    image:
      "https://imgr.search.brave.com/q2fPrhbYJ7hww5DfGLR_Yaz-DgN4NB7FhF3IBYWlUhI/fit/1200/630/ce/1/aHR0cHM6Ly9hc3Nl/dHMua29nYW4uY29t/L2ZpbGVzL3Byb2R1/Y3QvZXRhaWwvQXBw/bGUtL0tISVBQMTI5/MTg2NENHUllfMS5q/cGc_YXV0bz13ZWJw/JmNhbnZhcz0xMjAw/JTJDNjMwJmZpdD1i/b3VuZHMmaGVpZ2h0/PTYzMCZxdWFsaXR5/PTc1JndpZHRoPTEy/MDA",
    price: 2199,
    number: 0,
  },
  {
    valueNum: "prod6",
    name: "Ultimate Gaming PC",
    image:
      "https://imgr.search.brave.com/gQGsVSPARdgGGXE7IdLyliVTMSdGAEszVBvdK7OiKN0/fit/1200/675/ce/1/aHR0cHM6Ly9pbWFn/ZXMuaWRnZXNnLm5l/dC9pbWFnZXMvYXJ0/aWNsZS8yMDE4LzAx/L2NlczE4X3Bob18w/MTZfb3JpZ2luZGVz/a3RvcHMtMTAwNzQ2/NzM4LWxhcmdlLmpw/Zw",
    price: 4950,
    number: 0,
  },
  {
    valueNum: "prod7",
    name: "Top Spec Laptop",
    image:
      "https://imgr.search.brave.com/OijtdMN9QwNRQ1gXQPO0i_g3ejjH9YOuCX60WkTnpdE/fit/1200/800/ce/1/aHR0cHM6Ly90aGVn/YWRnZXRmbG93LmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNy9iZXN0LWdh/bWluZy1sYXB0b3At/ZGQtanVsMTktZmVh/dHVyZWQuanBlZw",
    price: 3699,
    number: 0,
  },
  {
    valueNum: "prod8",
    name: "Apple Macbook Pro",
    image:
      "https://imgr.search.brave.com/k3DYgxrHOZAdAh6f5GmC8GzCrBs8gj4aBlHYHlZBuIU/fit/1200/720/ce/1/aHR0cHM6Ly90dWRv/ZW10ZWNub2xvZ2lh/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wNS9tYWMu/anBn",
    price: 2799,
    number: 0,
  },
  {
    valueNum: "prod9",
    name: "Top Spec Mac Pro",
    image:
      "https://imgr.search.brave.com/US_fTjRYF39ZS_NoY4LP2F111f9K4ZlaseO8aAAzJ-o/fit/1100/513/ce/1/aHR0cHM6Ly9pbWcu/bWVuc3hwLmNvbS9t/ZWRpYS9jb250ZW50/LzIwMTkvSnVuL2Fw/cGxlLXJzcXVvLXMt/dG9wLXNwZWMtbWFj/LXByby1jb3VsZC1j/b3N0LWFyb3VuZC1y/cy0zNS1sYWtoczE0/MDAtMTU1OTY0ODE0/N18xMTAweDUxMy5q/cGc",
    price: 53247,
    number: 0,
  },
  {
    valueNum: "prod10",
    name: "Entire Steam Game Library",
    image:
      "https://imgr.search.brave.com/nnU3LLzX75fH1Wl3_yz0bmTybrHg0M0Rc3e4ZDLwy8k/fit/1200/675/ce/1/aHR0cHM6Ly9zbS5w/Y21hZy5jb20vdC9w/Y21hZ19hdS9nYWxs/ZXJ5LzEvMTctc3Rl/YW0tdC8xNy1zdGVh/bS10aXBzLWZvci1w/Yy1nYW1pbmctbm9v/YnMtYW5kLXBvd2Vy/LXVzZXJzX3N5eHQu/MTIwMC5qcGc",
    price: 537192,
    number: 0,
  },
  {
    valueNum: "prod11",
    name: "Netflix premium for 100 years",
    image:
      "https://imgr.search.brave.com/UwePglf7Vg7ysQkZmbWSIJp1_emsPLQAMcNkN-SvRbQ/fit/1200/1080/ce/1/aHR0cHM6Ly9jZG4u/MW1pbjMwLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/Mi9Db3VsZXVyLWxv/Z28tTmV0ZmxpeC5q/cGc",
    price: 21588,
    number: 0,
  },
  {
    valueNum: "prod12",
    name: "Spotify for 100 years",
    image:
      "https://imgr.search.brave.com/I6aIZPuIEBXNcajVZ6i2kVRz4M-5t3HV-kSDNxrbJwQ/fit/1200/800/ce/1/aHR0cHM6Ly9pbWFn/ZXMuaWRnZXNnLm5l/dC9pbWFnZXMvYXJ0/aWNsZS8yMDE4LzEx/L3Nwb3RpZnktbG9n/by0xMDA3NzkwNDIt/bGFyZ2UuM3gyLmpw/Zw",
    price: 19200,
    number: 0,
  },
  {
    valueNum: "prod13",
    name: "Entire production of Nvidia GPUs for 2022",
    image:
      "https://imgr.search.brave.com/3WhGNUh1AayEWY0m_mTs0G-iQO__-7ek-SR9wR2diIg/fit/632/225/ce/1/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/NWZCckRKc2QtNUdS/YlhRZVZtWmFnSGFG/aiZwaWQ9QXBp",
    price: 700000000,
    number: 0,
  },
  {
    valueNum: "prod14",
    name: "LG 88' OLED 8K ThinQ®",
    image:
      "https://imgr.search.brave.com/DhNxOXDW0ymvYZ_H8qbGA78bjyB62-jJG5WDV78AdOY/fit/1170/730/ce/1/aHR0cHM6Ly93d3cu/bGcuY29tL2F1L2lt/YWdlcy90dnMvbWQw/NjIzMjA3Ni9nYWxs/ZXJ5Lzg4LVpYLTNf/MTE3MHg3MzAuanBn",
    price: 19999,
    number: 0,
  },
  {
    valueNum: "prod15",
    name: "Fiat 500",
    image:
      "https://imgr.search.brave.com/PzJHfBvcHJVsOyuc6397jiINb7KOfeO954vdePf2sOI/fit/1200/1040/ce/1/aHR0cHM6Ly93d3cu/Y2Fyc2Nvb3BzLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/MC8xMS9GaWF0LTUw/MC1ieS1Nb3Bhci5q/cGc",
    price: 19000,
    number: 0,
  },
  {
    valueNum: "prod16",
    name: "Toyota Camry",
    image:
      "https://imgr.search.brave.com/W8ur56BI5meXC58JfF0fmYVewz0EcpJ6eNWHiIo6c_U/fit/1200/1200/ce/1/aHR0cDovL3d3dy5o/ZGNhcndhbGxwYXBl/cnMuY29tL3dhbGxz/LzIwMThfdG95b3Rh/X2NhbXJ5X3NlXzIt/SEQuanBn",
    price: 29000,
    number: 0,
  },
  {
    valueNum: "prod17",
    name: "Tesla Model S Plaid",
    image:
      "https://imgr.search.brave.com/Hvoxx6xOqYqb_ew9JMsPXP8CbmEU2Kl-8dWT0ATiv_M/fit/1200/1080/ce/1/aHR0cHM6Ly9jZG4u/bW90b3IxLmNvbS9p/bWFnZXMvbWdsL2dM/RXBFL3MxL3Rlc2xh/LW1vZGVsLXMtcGxh/aWQtaW4tcmVkLmpw/Zw",
    price: 132000,
    number: 0,
  },
  {
    valueNum: "prod18",
    name: "Ferrari F8",
    image:
      "https://imgr.search.brave.com/sJxg__IaaBBc3P3U0W2DXfbexovEFA_WeAxIvsb8iII/fit/1200/1080/ce/1/aHR0cHM6Ly9jZG4u/bW90b3IxLmNvbS9p/bWFnZXMvbWdsL3pN/Uks2L3MxL2ZlcnJh/cmktZjgtdHJpYnV0/by5qcGc",
    price: 276000,
    number: 0,
  },
  {
    valueNum: "prod19",
    name: "Lamborghini Aventador SVJ",
    image:
      "https://imgr.search.brave.com/xYabK92bASLXhNePCHg2VSBkJINOzEN0GkhTwMshbkE/fit/1200/778/ce/1/aHR0cHM6Ly9ibG9n/LmR1cG9udHJlZ2lz/dHJ5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOC8wOC9s/YW1ib3JnaGluaV9h/dmVudGFkb3Jfc3Zq/LTEuanBn",
    price: 512000,
    number: 0,
  },
  {
    valueNum: "prod20",
    name: "Bugatti La Voiture Noire",
    image:
      "https://imgr.search.brave.com/iyIJhU3C4lqRvXSeRBFpm67KSX5kdrzqt3Lq1VekhLo/fit/1200/1080/ce/1/aHR0cHM6Ly9zMS5j/ZG4uYXV0b2V2b2x1/dGlvbi5jb20vaW1h/Z2VzL25ld3MvZ2Fs/bGVyeS8xODdtLWJ1/Z2F0dGktbGEtdm9p/dHVyZS1ub2lyZS1o/YXMtYS1kYXJrLXNl/Y3JldF8xLmpwZw",
    price: 11000000,
    number: 0,
  },
  {
    valueNum: "prod21",
    name: "1000 Acres of land",
    image:
      "https://imgr.search.brave.com/s2VifJXMFolNtKGBAdQW7PtN4oo7W78Gptu5-wIUSdM/fit/1200/901/ce/1/aHR0cDovL3d3dy5t/b2ZmYXRkdW5sYXAu/Y29tL2ltYWdlcy9w/cm9wZXJ0aWVzL2xh/cmdlLzIwMTUtMDIt/MTYtMTMtMjAtNDEt/MmdjMS02NjItMDY4/LmpwZw",
    price: 4100000,
    number: 0,
  },
  {
    valueNum: "prod22",
    name: "Private Island, Central America (medium size)",
    image:
      "https://imgr.search.brave.com/qDCz-G4CRuSmXUI6zP-0TkWQD8a3Bi33yV5E_VcTRGc/fit/1200/923/ce/1/aHR0cHM6Ly9ob3Rl/bGllcm1hbGRpdmVz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/TmFsYWRodV9Qcml2/YXRlX0lzbGFuZF9B/ZXJpYWxfRnJvbV9B/Ym92ZS5qcGc",
    price: 4950000,
    number: 0,
  },
  {
    valueNum: "prod23",
    name: "Eating out for 100 years (4 meals/day)",
    image:
      "https://imgr.search.brave.com/jRLrwlPAu9FcevOfUuiQaasJVYYVY_KPYkIHuUvu2vM/fit/1068/713/ce/1/aHR0cHM6Ly9tb25l/eWNyYXNoZXJzLXNw/YXJrY2hhcmdlbWVk/aWEubmV0ZG5hLXNz/bC5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTgvMTIvZWF0/aW5nLW91dC1hdC1y/ZXN0YXVyYW50LWRp/bmluZy1idXJnZXJz/LTEwNjh4NzEzLmpw/Zw",
    price: 3000000,
    number: 0,
  },
  {
    valueNum: "prod24",
    name: "Diamond Ring (Tiffany - 1 carat)",
    image:
      "https://imgr.search.brave.com/hDXPFOBee2KV4zWYkPG1TBmXr6reUJEjZqgJgyqFfpU/fit/1200/922/ce/1/aHR0cHM6Ly9hLjFz/dGRpYnNjZG4uY29t/L2FyY2hpdmVzRS91/cGxvYWQval8zMDMv/MTVfMTUvcDEwMTg5/MDMvUDEwMTg5MDNf/bC5qcGVn",
    price: 17000,
    number: 0,
  },
  {
    valueNum: "prod25",
    name: "Rolex Watch",
    image:
      "https://imgr.search.brave.com/7-Kz9pagD2EOU9a1W2FNXEUwlrjROrJENSZv9kqCR0Y/fit/1200/1200/ce/1/aHR0cHM6Ly93d3cu/Ym9ic3dhdGNoZXMu/Y29tL3JvbGV4LWJs/b2cvd3AtY29udGVu/dC91cGxvYWRzLzIw/MTQvMDEvdmludGFn/ZS1yb2xleC1zdWJt/YXJpbmVyLTE2ODAu/anBn",
    price: 12000,
    number: 0,
  },
  {
    valueNum: "prod26",
    name: "Les Femmes d’Alger by Picasso",
    image:
      "https://imgr.search.brave.com/_hMryKrHAMsLe4PAMuXR-D0mDflH54gE62jifoWqDso/fit/1200/843/ce/1/aHR0cDovL3d3dy5m/cmFuY2V0dmluZm8u/ZnIvaW1hZ2UvNzU1/MG1tbGZuLWY2ZGYv/MTUwMC84NDMvNjE0/ODQwMS5qcGc",
    price: 179400000,
    number: 0,
  },
  {
    valueNum: "prod27",
    name: "Monalisa by Leonardo da Vinci (estimate)",
    image:
      "https://imgr.search.brave.com/TBijTGAoCDRDUFFGL6HOqFzsSf77qPAlpl4xEGiNxqk/fit/1200/1200/ce/1/aHR0cHM6Ly9pMi53/cC5jb20vd3d3LmZy/b210ZXhhc3RvYmV5/b25kLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNS8xMC9N/dXMlQzMlQTllLWR1/LUxvdXZyZS1MZW9u/YXJkby1kYS1WaW5j/aXMtRmFtb3VzLU1v/bmEtTGlzYS5qcGc",
    price: 869000000,
    number: 0,
  },
  {
    valueNum: "prod28",
    name: "Helicopter Bell 206",
    image:
      "https://imgr.search.brave.com/IPEiSn7qHYHU5xIa_OPiykqsaRqKw8uOKQGUyYijLRo/fit/1200/799/ce/1/aHR0cHM6Ly9ldXJv/cGVhbmFpcmNyYWZ0/c2FsZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA5/LzE4MDEyMDE2LTIu/anBn",
    price: 750000,
    number: 0,
  },
  {
    valueNum: "prod29",
    name: "One week in EVERY country of the planet",
    image:
      "https://imgr.search.brave.com/zz4GfhBaP6-jqdDRwyuHYL3WpQeprqOSAFQZEhh00gs/fit/867/225/ce/1/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5R/dEU3bXNITExiNktO/WkJsdzVrQktnSGFF/RCZwaWQ9QXBp",
    price: 795000,
    number: 0,
  },
  {
    valueNum: "prod30",
    name: "Private Jet",
    image:
      "https://imgr.search.brave.com/aO7YQcys3MW4J5ftCyhB_vqpt0hpTtRpfUPiSeOGwRM/fit/1200/1200/ce/1/aHR0cDovL3N0YXRp/YzMuYnVzaW5lc3Np/bnNpZGVyLmNvbS9p/bWFnZS81NjFlNzhi/YWRkMDg5NWM2NDg4/YjQ2OGMtMjY2Ny0y/MDAwL21heHJlc2Rl/ZmF1bHQuanBn",
    price: 17000000,
    number: 0,
  },
  {
    valueNum: "prod31",
    name: "Produce a Hollywood Movie",
    image:
      "https://imgr.search.brave.com/CaTQH-NZGODEOL-gv56lDOn9z9AbBSjNgP1MFjQI1KM/fit/1200/1200/ce/1/aHR0cDovL21vdmlu/Z3RvbGF0b2RheS5j/b20vd3AtY29udGVu/dC91cGxvYWRzLzIw/MTQvMDkvQmFja2dy/b3VuZC1hY3Rpbmcu/anBn",
    price: 90000000,
    number: 0,
  },
  {
    valueNum: "prod32",
    name: "Regular Apartment (2 bd, 2 ba)",
    image:
      "https://imgr.search.brave.com/vigUMM4maxaXeAfxQMnjFpIKfXA75BL3yJXDVSi0uvw/fit/1200/1200/ce/1/aHR0cHM6Ly93d3cu/ZmluZHJlbnRhbHMu/Y29tL3ZhY2F0aW9u/cy9yZW50YWxzLzE0/ODc0LzE0NTc3Ny9u/YXNodmlsbGUtYXBh/cnRtZW50LTIwNC1m/YWJ1bG91cy0yLWJy/LWJhLWFwdC13ZXN0/LXZhbmRlcmJpbHQt/MS5qcGc",
    price: 250000,
    number: 0,
  },
  {
    valueNum: "prod33",
    name: "Paris Luxury Apartment(3 bd, 4 ba)",
    image:
      "https://imgr.search.brave.com/9i_on5BQh2RDsaHI5VuCY8ldZzKHg3_PwJdh3WVXNhc/fit/1200/1200/ce/1/aHR0cHM6Ly9kMXFm/ajIzMXVnN3dkdS5j/bG91ZGZyb250Lm5l/dC9waWN0dXJlcy9l/c3RhdGUvMzQyNC8z/NDIzNzg1LzE0NjM3/MjM1NTQ1ZGU2Mjk1/MzQ3MDMyMC45NDk2/NTcwNl80MDk2Lmpw/Zw",
    price: 3000000,
    number: 0,
  },
  {
    valueNum: "prod34",
    name: "L.A Home (5 bd, 6 ba)",
    image:
      "https://imgr.search.brave.com/2DZMzEJbeIOFDdhl7KeERgpVKRTHSPAes7A2okQAbD8/fit/1200/1024/ce/1/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdhL2Nj/L2JhLzdhY2NiYWFl/OWRjNGI5ZDMzOTAy/NzdiOGU0MzIzYTBi/LmpwZw",
    price: 6000000,
    number: 0,
  },
  {
    valueNum: "prod35",
    name: "L.A Mega Mansion (8 bd, 20 ba)",
    image:
      "https://imgr.search.brave.com/xcoxSFmmjWTuICwl5PDR-eU-AAJ-eaSMH97shutLLYs/fit/1200/1200/ce/1/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vbHV4dXJ5cC9p/bWFnZS91cGxvYWQv/cV9hdXRvOmdvb2Qs/Zl9hdXRvLHdfMzAw/MCxjX2xpbWl0L01M/U19pc3prdzk",
    price: 52000000,
    number: 0,
  },
  {
    valueNum: "prod36",
    name: "Modern Building (35 condos + 10 Offices)",
    image:
      "https://imgr.search.brave.com/-Zs5xyVIbljzF1-M7sGn_AR5tPEWa6zJjj8KENqxaII/fit/1200/1200/ce/1/aHR0cHM6Ly9qb29p/bm4uY29tL2ltYWdl/cy9tb2Rlcm4tYnVp/bGRpbmctMS5qcGc",
    price: 12000000,
    number: 0,
  },
  {
    valueNum: "prod37",
    name: "Sailboat",
    image:
      "https://imgr.search.brave.com/YcQXXP4XPhwUmyhviSWwdnTWhiTVHwDZ2-_qswoDDDM/fit/1200/1200/ce/1/aHR0cHM6Ly9pbWFn/ZXM4LmFscGhhY29k/ZXJzLmNvbS8zNjkv/MzY5NDg3LmpwZw",
    price: 130000,
    number: 0,
  },
  {
    valueNum: "prod38",
    name: "Mega Yacht",
    image:
      "https://imgr.search.brave.com/10QC6UJ1M4day-Rdx1FOv44Att7ocDO5X5LgVvlq57Q/fit/1200/1080/ce/1/aHR0cHM6Ly9sdXh1/cnltb3RvcnlhY2h0/cy5nci93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNi8xMS8xLTEy/NzkxOWwtMTkyMHgx/MDgwLmpwZw",
    price: 300000000,
    number: 0,
  },
];

//converting to cards
prodToCards(products);
//
//function for making cards
function prodToCards(arr) {
  arr.forEach((product) => {
    let cardTemplate = `
    <div class="col-sm-4">
      <div class="card ${product.valueNum}">
      <img src="${product.image}" class="card-img-top" alt="Image" style="height: 250px; object-fit:cover">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">$${product.price}</p>
          <div class="btnContainer">
            <button class="btn btn-danger sellBtn me-1" disabled=true>Sell</button>
            <div class="buyNumber bg-light border border-secondary rounded m-2">${product.number}</div>
            <button class="btn btn-success buyBtn ms-1">Buy</button>
          </div>
        </div>
      </div>
    </div>`;
    document.querySelector(".row").innerHTML += cardTemplate;
  });
  addEvents();
}

//function for adding eventListeners
function addEvents() {
  //buybtn stuff
  const buyBtns = document.querySelectorAll(".buyBtn");
  buyBtns.forEach((btn) => {
    //adding event listener
    btn.addEventListener("click", (e) => {
      //finding the product
      currentProduct = products.find((product) => {
        return (
          product.valueNum ===
          e.target.parentElement.parentElement.parentElement.classList[1]
        );
      });
      //finding price
      priceOfProduct = currentProduct.price;
      //finding number
      numberOfProduct = currentProduct.number;

      //checking if affordable
      if (amountLeft >= priceOfProduct) {
        //changing buynumber
        let buyNumber = parseInt(
          e.target.parentElement.querySelector(".buyNumber").innerText
        );
        e.target.parentElement.querySelector(".buyNumber").innerHTML =
          ++buyNumber;
        //changing values
        amountUsed += priceOfProduct;
        amountLeft -= priceOfProduct;
        //changing the number bought
        products.find((product) => {
          return (
            product.valueNum ===
            e.target.parentElement.parentElement.parentElement.classList[1]
          );
        }).number++;
        //removing disabled from sellbtn
        e.target.parentElement
          .querySelector(".sellBtn")
          .removeAttribute("disabled");
        //changing the navbar text
        changeRemaining();
        changePercent();
        //playing audio
        buySound.load();
        buySound.play();
        //changing the receipt
        changeReceipt(currentProduct, "add");
      } else if (priceOfProduct > amountLeft) {
        cantAfford();
      }
    });
  });

  //sellbtn stuff
  const sellBtns = document.querySelectorAll(".sellBtn");
  sellBtns.forEach((btn) => {
    //adding eventlistener
    btn.addEventListener("click", (e) => {
      //finding the product
      currentProduct = products.find((product) => {
        return (
          product.valueNum ===
          e.target.parentElement.parentElement.parentElement.classList[1]
        );
      });
      //finding price
      priceOfProduct = currentProduct.price;
      //finding number
      numberOfProduct = currentProduct.number;
      //selling product
      if (numberOfProduct > 0) {
        //changing buy number
        let buyNumber = parseInt(
          e.target.parentElement.querySelector(".buyNumber").innerText
        );
        e.target.parentElement.querySelector(".buyNumber").innerHTML =
          --buyNumber;
        //changing values
        amountUsed -= priceOfProduct;
        amountLeft += priceOfProduct;
        //changing the number bought
        products.find((product) => {
          return (
            product.valueNum ===
            e.target.parentElement.parentElement.parentElement.classList[1]
          );
        }).number--;
        //changing the number of prod
        numberOfProduct = products.find((product) => {
          return (
            product.valueNum ===
            e.target.parentElement.parentElement.parentElement.classList[1]
          );
        }).number;
        //disabling btn if sold all
        if (numberOfProduct === 0) {
          e.target.setAttribute("disabled", true);
        }
        //changing navbar text
        changeRemaining();
        changePercent();
        //playing audio
        buySound.load();
        buySound.play();
        //changing the receipt
        changeReceipt(currentProduct, "remove");
      }
    });
  });
}

//function to change amount left
function changeRemaining() {
  moneyLeft.innerHTML = amountLeft;
}

//function to change percentage of used amount
function changePercent() {
  percentUsed = ((amountUsed / totalAmount) * 100).toFixed(6);
  const sentenceTemplate = `You have used ${percentUsed}% of Elon's money so far!`;
  moneySpent.innerHTML = sentenceTemplate;
  if (amountUsed === 0)
    moneySpent.innerHTML = "You haven't spent a single dollar, start spending!";
}

//function if cant afford something
function cantAfford() {
  moneyLeft.innerHTML = "Can't afford that!";
  moneySpent.innerHTML = "Sell something!";
}

//function to change receipt
function changeReceipt(product, todo) {
  //checking if info message there 
  if (
    receipt.innerHTML.trim() ===
      `<tr><td colspan="3">Nothing has been bought yet!</td></tr>`) {
    receipt.innerHTML = "";
  }
  
  //checking to add
  if (todo === "add") {
    //adding product amount if product exists
    if (receipt.querySelector("." + product.valueNum)) {
      let productRow = receipt.querySelector("." + product.valueNum);
      productRow.querySelector(".amount").innerHTML = "x" + product.number;
      productRow.querySelector(".price").innerHTML =
        "$" + product.number * product.price;
    } else {
      //adding product if doesn't exist
      let newRow = document.createElement("tr");
      newRow.setAttribute("class", product.valueNum);

      let nameCell = document.createElement("td");
      nameCell.appendChild(document.createTextNode(product.name));
      nameCell.setAttribute("class", "name");
      newRow.appendChild(nameCell);

      let amountCell = document.createElement("td");
      amountCell.appendChild(document.createTextNode("x" + product.number));
      amountCell.setAttribute("class", "amount");
      newRow.appendChild(amountCell);

      let priceCell = document.createElement("td");
      priceCell.appendChild(
        document.createTextNode("$" + product.number * product.price)
      );
      priceCell.setAttribute("class", "price");
      newRow.appendChild(priceCell);

      receipt.appendChild(newRow);
    }
  } else if (todo === "remove") {
    //removing product amount if product amount not zero
    if (receipt.querySelector("." + product.valueNum)) {
      if (product.number >= 1) {
        let productRow = receipt.querySelector("." + product.valueNum);
        productRow.querySelector(".amount").innerHTML = "x" + product.number;
        productRow.querySelector(".price").innerHTML =
          "$" + product.number * product.price;
      } else if (product.number === 0) {
        receipt.removeChild(
          receipt.querySelector("." + product.valueNum)
        );
      }
      if (amountUsed === 0) {
        receipt.innerHTML=`<tr><td colspan="3">Nothing has been bought yet!</td></tr>`
      }
    }
  }
  receiptTotal.innerText=amountUsed;
}
