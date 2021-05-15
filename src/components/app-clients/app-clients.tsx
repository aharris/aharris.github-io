import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-clients',
  styleUrl: 'app-clients.scss',
  shadow: false
})
export class AppClients {
  componentDidLoad() {
  }

  render() {
    return (
      <div class="app-clients container">
        <h2 class="h1">Clients</h2>

        <ul class="client-list">
          <li>Allin Interactive Latin America</li>
          <li>Amstar</li>
          <li>Apple On the Go</li>
          <li>Apple Vacations</li>
          <li>Avaya</li>
          <li>Azamara Club Cruises</li>
          <li>Barclays</li>
          <li>Blue Mountain</li>
          <li>Boehringer Ingelheim</li>
          <li><a href="/breathless">Breathless</a></li>
          <li>Carrier</li>
          <li>Celebrity Cruises</li>
          <li>Comcast</li>
          <li>Corteva Agriscience</li>
          <li>Dreams Resort and Spa</li>
          <li>EY</li>
          <li>First Key Creations</li>
          <li>Flamingo Beach Resort &amp; Spa</li>
          <li>Keating's River Grill</li>
          <li>KeyLime Cove</li>
          <li><a href="#!/liberty_global">Liberty Global</a></li>
          <li>Maritz</li>
          <li><a href="#!/media_giraffes">Media Giraffes</a></li>
          <li>MetTel</li>
          <li>MMA MarketLink</li>
          <li>Mobile Monday</li>
          <li><a href="#!/movitas">Movitas</a></li>
          <li>Nintendo</li>
          <li>Nocturnal Skate Shop</li>
          <li>O'Malley's Pub'</li>
          <li>PNC</li>
          <li>Pocono Mountains</li>
          <li>Psychic Source</li>
          <li>Quick Chek</li>
          <li>Rock & Roll Hall of Fame</li>
          <li>Royal Caribbean International</li>
          <li>Saint Clare's Health System</li>
          <li><a href="#!/secrets">Secrets Resort's and Spa</a></li>
          <li>Shawnee Mountain</li>
          <li>Sheraton</li>
          <li>Sports Core</li>
          <li>St. Petersburg Clearwater</li>
          <li>Telnet</li>
          <li>The Children's Journey</li>
          <li>The Closet Therapy</li>
          <li>The Shawnee Inn</li>
          <li>The Source</li>
          <li><a href="#!/traveler_connect">Traveler Connect</a></li>
          <li>Wialan</li>
          <li>WIRB-Copernicus Group, Inc.</li>
        </ul>
      </div>
    );
  }
}
