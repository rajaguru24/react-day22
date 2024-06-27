import { useState } from "react";

function App() {
  
  const data = {
    k1: {
      u1:'Single Users',
      u2:'5 Users',
      u3:'Unlimited Users'
    },
    k2: '50GB Storage',
    k3: 'Unlimited Public Projects',
    k4: 'Community Access',
    k5: 'Unlimited Private Projects',
    k6: 'Dedicated Phone Support',
    k7: 'Free Subdomain',
    k8: 'Monthly Status Reports',
  };
  return (
    <>
      <div class="container text-center mt-5" style={{ padding: "10px" }}>
        <div class="row gy-5 pt-5 pb-5">
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-body-secondary">Free</h6>
                <h3 class="card-title">$0/month</h3>
                <hr />
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k1.u1}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k2}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k3}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k4}</p>
                <p class="text-start text-body-secondary"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;{data.k5}</p>
                <p class="text-start text-body-secondary"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;{data.k6}</p>
                <p class="text-start text-body-secondary"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;{data.k7}</p>
                <p class="text-start text-body-secondary"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;{data.k8}</p>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button" aria-hidden="true" >Button</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-body-secondary">PLUS</h6>
                <h3 class="card-title">$9/month</h3>
                <hr />
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k1.u2}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k2}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k3}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k4}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k5}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k6}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k7}</p>
                <p class="text-start text-body-secondary"><i class="fa fa-times" aria-hidden="true"></i>&nbsp;&nbsp;{data.k8}</p>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button" >Button</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm">
            <div class="card">
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-body-secondary">PRO</h6>
                <h3 class="card-title">$49/month</h3>
                <hr />
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k1.u3}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k2}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k3}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k4}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k5}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k6}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k7}</p>
                <p class="text-start"><i class="fa fa-check" aria-hidden="true"></i>&nbsp;&nbsp;{data.k8}</p>
                <div class="d-grid gap-2">
                  <button class="btn btn-primary" type="button">Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;