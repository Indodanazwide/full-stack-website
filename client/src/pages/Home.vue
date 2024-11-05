<template>
    <div class="home-page">
        <section class="hero">
            <article>
                <h1>Rendezvous</h1>
                
                <hr>

                <p>Savor the Moment, Anytime, Anywhere!</p>
            </article>
        </section>

        <aside>
            <article>
                <h3>Indulge in Our Signature Creations</h3>

                <hr>

                <p>From classic favorites to innovative twists, our menu has something for everyone.</p>
            </article>
        </aside>

        <section class="menu">
            <article>
                <ul>
                    <li class="item category">
                        <img src="../assets/images/jpg/cake.jpg" alt="Tasty Cake" />
                    </li>

                    <li class="item description">
                        <p><strong>Tasty Treats</strong></p>
                        <p>Delightful desserts perfect for satisfying your sweet tooth.</p>
                    </li>

                    <li class="item category">
                        <img src="../assets/images/jpg/sandwich.jpg" alt="Sandwich" />
                    </li>

                    <li class="item description">
                        <p><strong>Sandwiches</strong></p>
                        <p>Freshly made sandwiches with options for chips on the side.</p>
                    </li>

                    <li class="item category">
                        <img src="../assets/images/jpg/salad.jpg" alt="Salad" />
                    </li>

                    <li class="item description">
                        <p><strong>Light Meals</strong></p>
                        <p>Quick, flavorful bites ideal for a lighter meal.</p>
                    </li>

                    <li class="item category">
                        <img src="../assets/images/jpg/golden.jpg" alt="Golden" />
                    </li>

                    <li class="item description">
                        <p><strong>Main Meals</strong></p>
                        <p>Hearty, gourmet dishes featuring satisfying flavors and ingredients.</p>
                    </li>

                    <li class="item category">
                        <img src="../assets/images/jpg/drinks.jpg" alt="Drinks" />
                    </li>

                    <li class="item description">
                        <p><strong>Cold Bevarages</strong></p>
                        <p>Refreshing cold drinks, juices, and smoothies to cool you down.</p>
                    </li>

                    <li class="item category">
                        <img src="../assets/images/jpg/coffe.jpg" alt="Coffee" />
                    </li>

                    <li class="item description">
                        <p><strong>Hot Bevarages</strong></p>
                        <p>Warm, comforting beverages to enjoy with your meal or on their own.</p>
                    </li>
                </ul>
            </article>

            <div class="menu-cta">
                <p>Explore our delicious menu and treat yourself to mouth-watering meals and refreshing drinks! Order now or reserve your table for an unforgettable dining experience!</p>
            
                <router-link to="/menu">Explore Our Menu & Order Now!</router-link>
            </div>
        </section>

        <section class="about">
            <article class="about-us">
                <p>
                    Welcome to <strong>Rendezvous Restaurant</strong>, where culinary excellence meets
                    innovation. Nestled within the vibrant Steve Biko Campus at
                    <a href="http://dut.ac.za">Durban University of Technology</a>, Rendezvous was born from
                    a shared passion for great food, sustainability, and student empowerment. Our story is
                    as much about serving delicious meals as it is about fostering a space for creativity,
                    education, and community engagement.
                </p>

                <router-link to="/about">Explore more about us!</router-link>
            </article>

            <img src="../assets/images/jpg/restaurant.jpg" alt="About Us">
        </section>

        <section class="allergy-statement">
            <p>
                At Rendezvous Restaurant, we strive to offer a variety of delicious meals and beverages that
                cater to diverse tastes and preferences. <mark>Please note</mark> that some items on our
                menu may contain or come into contact with <mark>common allergens</mark>, including WHEAT,
                EGGS, PEANUTS, TREE NUTS, MILK, FISH, SHELLFISH, and SOY. We take food safety seriously and
                encourage customers with allergies or specific dietary concerns to
                <mark>inform our staff when placing orders</mark> so we can do our best to accommodate your
                needs.
            </p>
        </section>
    </div>
</template>