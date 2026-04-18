import { ArrowLeft, ArrowRight } from 'lucide-react'
import Container from '../../../components/Container'
import TestimonialCard from '../../../components/client/Testimonial/TestimonialCard'

const HomeEvaluateCustomer = () => {
  return (
    <Container>

      <main className="flex-1 py-12 px-6 md:px-20 max-w-[1440px] mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-black">
            Our Happy Customers
          </h1>
          <div className="flex gap-3">
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:border border-slate-200">
              <span className="material-symbols-outlined">
                <ArrowLeft />
              </span>
            </button>
            <button className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-white hover:border border-slate-200">
              <span className="material-symbols-outlined">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TestimonialCard />

          <TestimonialCard />

          <TestimonialCard />
        </div>
      </main>
    </Container>
  )
}

export default HomeEvaluateCustomer