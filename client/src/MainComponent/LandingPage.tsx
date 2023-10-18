// "use client"
import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import TopHeader from "../Components/TopHeader";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { fetchAllFlights } from "../store/flights";
import SearchBar from "../Components/SearchBaR";
import Image from "next/image";
function LandingPage() {
  
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllFlights());
  }, []);

  return (
    <div>
    <TopHeader />
      <Navbar /> 
      <div className="landing">
        <div className="landing-forall">
          <div className="landing-title">
            <h1>It's more than just a trip</h1>
          </div>
          <SearchBar />
        </div>
      </div>
      <div className="section-one">
        <div className="land-container">
          <div className="landing-header">
            <h5>
              Find your next adventure with these <span>flight deals</span>
            </h5>
          </div>
          <div className="landing-cards">
            <div className="land-card">
              <Image
                src="https://s3-alpha-sig.figma.com/img/8125/5891/ea1583d20a3fb02917ad104af6587f3e?Expires=1698019200&Signature=oYJoSEBFi-6b3a12UfTTG73EIqaIssMbnO258e~76qXs-vq4p5byGYmQigT-eL7zJiWYI9LkLEoA0chllUF8Z63NplN~F6ziuEzHANGYgQa7XCqgXDzuVFVX904qnBk1oYG~81ACMX5tOkMrivx1pYmMzaFMdcpnWBVa4iz3GCrQYcGLK2j9SvF27i0pcVukzr1t~31YT~3Jovu8xjkF~hxsWjFyn5lXfGO1FjK8j3WrXvaNQWQGfSrq3d69vYxdsNct3ILOyY5TvZARFuJUbMlsbIrxkeK~7eLPd~sWGw6a9Q-FnFyOeefaIjOdWqexseAeEIVKp4hci4MrU-6j5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                width={410}
                height={397}
              />
              <div className="card-info">
                <div className="smalltitle">
                  <div className="text-land">
                    The Bund, <span>Shanghai</span>
                  </div>
                  <div className="price-land">$598</div>
                </div>
                <span>China's most international city</span>
              </div>
            </div>
            <div className="land-card">
              <Image
                src="https://s3-alpha-sig.figma.com/img/3fda/53a3/3484d5625d49b225735e042218c3677f?Expires=1698019200&Signature=IjwrH0XaQs1~7W~mrMxyVdKkS0YUKjo4Ivb0o7a9~8pbnEjugL0p-Z5835Qj3sxd3hkGmSJInOvW2cfSSRU26ntvXC25HpWU6NvZJgch2ceEzMKOps2qqeC5asAsLPuc6bb009CXUbR5gxb-hKVI~hopFQQzIwEBj~3t3w9VccLmr~Lf2SJh3Gq1jY01u9rfpAmIzWekTMEjkJoO-0Wsz86v-8elelXVxS07l8TTc3~Zmn1y7s~sf~9MWpviF5OQwSuDFH9ZhQCNXXE28NtqmUk7tzF70bEzBN8nWGID2Ag6qm6i9lx9Hm~LnEq5KJi3ez0rMWgXyDrR9hWiK2hZvQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                width={410}
                height={397}
              />
              <div className="card-info">
                <div className="smalltitle">
                  <div className="text-land">
                    The Bund, <span>Shanghai</span>
                  </div>
                  <div className="price-land">$598</div>
                </div>
                <span>China's most international city</span>
              </div>
            </div>
            <div className="land-card">
              <Image
                src="https://s3-alpha-sig.figma.com/img/ca89/1425/cf94faaf7d2ea932cf5ce939144da65c?Expires=1698019200&Signature=KMmbaz7MHZA0OpSxV9zI0-VK8zqVjBR3D9Xrc-DfRWEurXLYgwcndrWb0lhdoCftXNmfz9vnfmRIS-R16miIPu9H9pQhLYAKl83Xuzt8qK4nYU6Y6XI1ZqUv7YCnxcZ0MNiMV4KMIC9hD~MNCxXxFkdGK1y~RsnBD8Ezm2JJjVE4Mtx1eZvW6KaAuMlkO~YDA125RgxjIGQhZvTYIppDjnri~ElMiCSp6psZxagcZdpHWVKC-YhmEXGrU1uC2TCb5DOHZ4ZlnZfhRgOU1mklWF0GRJMAV8uWJekrbNY~b901GKH-~gEapagaTtX8rmTt10qb9wx8BmMVnghpD0SRKg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                width={410}
                height={397}
              />
              <div className="card-info">
                <div className="smalltitle">
                  <div className="text-land">
                    Sydney Opera House, <span>Sydney</span>
                  </div>
                  <div className="price-land">$981</div>
                </div>
                <span>Take a stroll along the famous harbor</span>
              </div>
            </div>
          </div>
          {/* end of cards */}
          <div className="land-card" id="large">
            <Image
              src="https://s3-alpha-sig.figma.com/img/de2a/7769/f3054fcc629cb3dcb883905e2f636736?Expires=1698019200&Signature=H~MWEu5SARHkTyvBEDH9Yd7sbb7mJoImF02-yenf5ljfWNdBXXesdOloQGwUJ1xwAYkcZ148nPLPfjDKCkUsKfNg4gKF9JTJrWzESsbZwgu1v5fKz1PxgYspMqHqYch0grBgoFMmyFBAvXL3jB4AGYa6fOeC73x-XHybz4NtGsxOBFkdcBmJZ7-dBlF2r1O8Cgyhnq9Nxwvjhhe-P7rQ77cGBbEKFiZQvOaP5U32ufaD3olAWcATtgUChlJK1J5vnLk1A8jCecd64ootyEs-VKT~kl9vDLZdbmdX2JSAxyatP0WUT39jAUoQRHt~QKx88NWy4Bn0KhlYRtMZn~Or1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
              width={1084.3}
              height={397}
              // border-top-right-radius={7}
              // style={{width:"100%",height:397}}
            />
            <div className="card-info">
              <div className="smalltitle">
                <div className="text-land">
                  Tsavo East National Park, <span>Kenya</span>
                </div>
                <div className="price-land">$1,248</div>
              </div>
              <p>
                Named after the Tsavo River, and opened in April 1984, Tsavo
                East National Park is one of the oldest parks in Kenya. It is
                located in the semi-arid Taru Desert.
              </p>
            </div>
          </div>
          <div className="landing-header">
            <h5>
              Find your next adventure with these{" "}
              <span id="grenn">flight deals</span>
            </h5>
            <div className="landing-cards">
              <div className="land-card">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/76a4/6e1f/36e3973a0e241ad25f02a8c4dcaa5142?Expires=1698019200&Signature=S8PszkSKmvZXFdUatdKks0a730VxGw0VWgUTnxM1EsrvSszOsqnkvnImEZfqfpKjmu-IGq67ze36pBmTDny~5YpSrifeoO1l-41GxjZdhNMikKrzg~yOOaXa1fa0N3IpzAdyaVQqTb-aiQYIGDEVDTQCRzl33RM7XW0T5VN40oXpVSmlCfIOYMMxRGYLeIpHIPCz-pXxhniZGVGymWR6k-YrFWW1rZKed4zro6FI9fXc~LRstabW0asWHLqg-q9eBhGSdlZ8Qb9irPnz0SKrhitK-GR6I7OvZr7OaBK3tEO4Dcwv0Hs3xfoKpdCsur2OUSxeloNjI8mg~rIKzTTj2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  width={410}
                  height={397}
                />
                <div className="card-info">
                  <div className="smalltitle">
                    <div className="text-land">
                      The Bund, <span id="grenn">Shanghai</span>
                    </div>
                  </div>
                  <p id="para">
                    From the 2nd century AD, the islands were known as the
                    'Money Isles' due to the abundance of cowry shells, a
                    currency of the early ages.
                  </p>
                </div>
              </div>
              <div className="land-card">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/a11c/0db5/aab66f6a0a2070bf155e3aa0a65dfcab?Expires=1698019200&Signature=gbPiBWwCf2jeRA2Vp1nrZsYY99n7TZpOmymzSIQSoY54P2AQMBxeslnt55nhuD0YICT5sYQxbBmkLwM37hxfWQuDUqAFFxDaGLc2xiTmMex4zWo-DK6YSMy95IvAO48eQqlvL47Pm-fotWMijcEXoBZtbQOiOV3wBmHHtHnnwtmqz8j6j0ZKXgHprn7cKlXGOiCAXKKbYh5t3BLFQKdzPQu0lk7496~F3Slu3LIwH3ryUR1W3M-Woc8luJkiiuOd-IQoG-CP7fcj-Xg0~9q5KP-rJSK77HRta7k20H1AuKYOVzJ2iA~Q-5CQ92m0i0-msyeUJkzJCtxFCSj2vZaKCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  width={410}
                  height={397}
                />
                <div className="card-info">
                  <div className="smalltitle">
                    <div className="text-land">
                      The Bund, <span id="grenn">Shanghai</span>
                    </div>
                  </div>
                  <p id="para">
                    Morocco’s Hispano-Moorish architecture blends influences
                    from Berber culture, Spain, and contemporary artistic
                    currents in the Middle East.
                  </p>
                </div>
              </div>
              <div className="land-card">
                <Image
                  src="https://s3-alpha-sig.figma.com/img/1100/eff7/00f39c55ae9c5933416fadc91696bd7e?Expires=1698019200&Signature=EBePSi8catrTAiAE5DoHfNqcTrWQuInrUTznRS-WQdQqRrUzrlRuDW-tcWflc5VQ-f4~l0~rY8ifnXEKcSXK7wdV~C-daHIrPRKscrUsq5wYaQevjz2dmvcI4kZ-M1vfTxLhnaJm7nd9zFdNtYdrV75l1XPv2dVkWaAYe7Fb0gAbmg633ZThyZ4MoZ2zxUOIUYm1f3krWdufXKzbAtbyz3r2NQCd8xxc1TgSJInpoHldcSUAo7dC5cRDzPnmGN7Ic93FToNFnGcRwtkBLRhY7yW-9Hcek70QDzuhMlqbLvXN36TMfUyXrGRDak~YweMvn3nwPjEYmOZo1RIKeXr-Zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  width={410}
                  height={397}
                />
                <div className="card-info">
                  <div className="smalltitle">
                    <div className="text-land">
                      Sydney Opera House, <span id="grenn">Sydney</span>
                    </div>
                  </div>
                  <p id="para">
                    Traditional Mongolian yurts consists of an angled
                    latticework of wood or bamboo for walls, ribs, and a wheel.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn">
            <button id="middle-btn">Explore more stays</button>
          </div>
          <div className="landing-header" id="ratee">
            <h5>
              Find your next adventure with these <span>flight deals</span>
            </h5>
          </div>
          <div className="rating-section">
            <div className="one-rate">
              <Image
                src="https://s3-alpha-sig.figma.com/img/cdf8/4f78/a0d24ee8a2573ce39911ae32c42177d7?Expires=1698019200&Signature=q9WDaO5JWYsqCgWgOoCvPyi2wpo~AVBFNplR4l5aPb-eJC0jJCBvhEYS~TPzF7e3h21mqYBh0VWvAPbzaMGNuaxVjUvDhN4-OLFvCP~IVtOVn6yQnIqpKV8o~-G50ngui5iec9UE9Oj2-m8v3KvDdORjcH9Zttw20GmPfOjCdAXC0YR2Ji261nT0Zt91n-S8y3NiygL4XTGxch2XZySt4FzEjYC8ScrijC9XHxUGu80NUYG1xRp56k~EmyTOq5~Wr9QqUz8yJQI3~jeFRF8BexU-EfJ~zH8IO3XVMowtJCS7vI7ZriB~ba5NlwMEavsGhO9OC4Wh-KkuvuDBFv4GFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                width={48}
                height={48}
              />
              <div className="rate-info">
                <span className="nameuser">Yifei Chen</span>
                <span>Seoul, South Korea | April 2019</span>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  What a great experience using Tripma! I booked all of my
                  flights for my gap year through Tripma and never had any
                  issues. When I had to cancel a flight because of an emergency,
                  Tripma support helped me read more...
                </p>
              </div>
            </div>
            <div className="one-rate">
              <Image
                src="https://s3-alpha-sig.figma.com/img/cdf8/4f78/a0d24ee8a2573ce39911ae32c42177d7?Expires=1698019200&Signature=q9WDaO5JWYsqCgWgOoCvPyi2wpo~AVBFNplR4l5aPb-eJC0jJCBvhEYS~TPzF7e3h21mqYBh0VWvAPbzaMGNuaxVjUvDhN4-OLFvCP~IVtOVn6yQnIqpKV8o~-G50ngui5iec9UE9Oj2-m8v3KvDdORjcH9Zttw20GmPfOjCdAXC0YR2Ji261nT0Zt91n-S8y3NiygL4XTGxch2XZySt4FzEjYC8ScrijC9XHxUGu80NUYG1xRp56k~EmyTOq5~Wr9QqUz8yJQI3~jeFRF8BexU-EfJ~zH8IO3XVMowtJCS7vI7ZriB~ba5NlwMEavsGhO9OC4Wh-KkuvuDBFv4GFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                width={48}
                height={48}
              />
              <div className="rate-info">
                <span className="nameuser">Yifei Chen</span>
                <span>Seoul, South Korea | April 2019</span>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  What a great experience using Tripma! I booked all of my
                  flights for my gap year through Tripma and never had any
                  issues. When I had to cancel a flight because of an emergency,
                  Tripma support helped me read more...
                </p>
              </div>
            </div>
            <div className="one-rate">
              <Image
                src="https://s3-alpha-sig.figma.com/img/cdf8/4f78/a0d24ee8a2573ce39911ae32c42177d7?Expires=1698019200&Signature=q9WDaO5JWYsqCgWgOoCvPyi2wpo~AVBFNplR4l5aPb-eJC0jJCBvhEYS~TPzF7e3h21mqYBh0VWvAPbzaMGNuaxVjUvDhN4-OLFvCP~IVtOVn6yQnIqpKV8o~-G50ngui5iec9UE9Oj2-m8v3KvDdORjcH9Zttw20GmPfOjCdAXC0YR2Ji261nT0Zt91n-S8y3NiygL4XTGxch2XZySt4FzEjYC8ScrijC9XHxUGu80NUYG1xRp56k~EmyTOq5~Wr9QqUz8yJQI3~jeFRF8BexU-EfJ~zH8IO3XVMowtJCS7vI7ZriB~ba5NlwMEavsGhO9OC4Wh-KkuvuDBFv4GFg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                width={48}
                height={48}
              />
              <div className="rate-info">
                <span className="nameuser">Yifei Chen</span>
                <span>Seoul, South Korea | April 2019</span>
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <p>
                  What a great experience using Tripma! I booked all of my
                  flights for my gap year through Tripma and never had any
                  issues. When I had to cancel a flight because of an emergency,
                  Tripma support helped me read more...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
