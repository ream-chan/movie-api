import React from 'react'

export default function Subcribe() {
  return (
    <>
    <body className='bg'>
    <main >
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center pricing">
      <h1 class="display-4 fw-normal text-body-emphasis">Pricing plan</h1>
      <p class="fs-5 text-body-secondary">offer a diversity of subscription plans for our audiences.</p>
    </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center sub-box">
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm trans-box">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0/Month</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>1 user included</li>
              <li>Unlimited Movies</li>
              <li>Review Access</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-outline-primary bt">Purchase</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm trans-box">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15/Month</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>3 users avaliable</li>
              <li>Unlimited Movies + Series</li>
              <li>Review Access</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary bt">Purchase</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm  trans-box">
          <div class="card-header py-3  ">
            <h4 class="my-0 fw-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29/Month</h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>5 users avaliable</li>
              <li>Unlimited Movies + Series</li>
              <li>Unreleased Teasers</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary bt">Purchase</button>
          </div>
        </div>
      </div>
    </div>
    </main>
    </body>
    </>
  )
}
