<!--
{
  "order":2,
  "title": "Deployment Architecture Diagram"
}
-->

# Deployment Architecture

A deployment architecture diagram consists of network boundaries and infrastructure hardware/software components. The size and quantity of the components are also sometimes specified in order to facilitate planning.
The deployment architecture mainly addresses the “Where” and “How many” with regards to the components in the system.
A common use of this diagram is to facilitate the upgrading of applications and services to handle the additional load or the optimisation of resources. Over time, as more users from various parts of the world start using your applications and services, your existing resources may not be able to handle the increased scale and load.

Source: [How to Draw Useful Technical Architecture Diagrams](https://medium.com/the-internal-startup/how-to-draw-useful-technical-architecture-diagrams-2d20c9fda90d)

<!--
@startuml
package "Cloud"{
  package "zone us-east-1"{
    package "ecomm VPC: ghjkl"{

      package "Public subnet: abcde" as pub-sub{
        [AWS ELB: abcde xyz] #Orange
      }

      package "Private subnet: efgh" as priv-sub{

        package "Presentation Layer: AWS EC2" as presentation{
          [ecommerce-web] as ec #DeepSkyBlue
          [delivery-dashboard-web] as dd
          ec -[hidden]d-> dd
        }
        package "Business Logic Layer: AWS EC2" as bussiness{
          [employee-api] as e #DeepSkyBlue
          [payment-api] as p #DeepSkyBlue
          [accounting-api] #DeepSkyBlue
          e -[hidden]d-> p
        }

        package "Data Storage Layer" as data{
            [Mysql 5.7 \n AWS RDS] as my #Orange
            [AWS S3] as s3 #Orange
            my -[hidden]d-> s3
        }

        package "Shared/Common Services:" as common{
            [iam] as i #DeepSkyBlue
            [aws-cloud-watch] as acw #Orange
            i -[hidden]d-> acw
        }
      }
    }
  }
}

legend right
    |Color| Deployment Type |
    |<#Orange>| aws-service|
    |<#DeepSkyBlue>| docker|
    |<#LemonChiffon>| manual|
endlegend

left to right direction
@enduml
-->

![](https://www.plantuml.com/plantuml/png/VPBDZjCy58RtlOgZpZhV9nWXf0gDXgRiYXWH18kXYnFxD37rJ_1FIuRElUCwLUJG3fNQg7wV73zludldqVgWvAn3jiE6O5vA4_ZyzmnWN7eocY2uWj3vubNAifIOKGg-FfGBQDeVEndp16J8GwYbOE12hSal06l6QGxee0jr4LVJnFHvVF-jWW_hvHc2N_tJ1cu-MTGDdQ7do_5MxD7JE9-sJJkCZq4-FrukRYL7sgCNHiCQUx8BI0hbws52be-M9y_KcYoZua3rveGIWviLKLVj-gKCbCESfDYJxGkEhgqDMZxUnNa64eFYiHMSazxmuYuFdo_Tby49JSx1sZI2NRElWnkGgRhgfEc92kp4OFwYU8Uz8kr7ifkGaAF8c0dQ2zqa-gMHD6tOPGKl6wxG8rJUsFXlw9TgyRYSDugxV-pTJmbl_diBttLw19zNLJ9M_VJuvEUikas8kxsAg7wY6h5_kbOjMkB_bqOfew4YknUCt289ixJubx90bRONbuzgPF3W2YPDuCK1FMiJZ-nmrLTCTIEM-URN-1k_iOEaXZG7AvhMf-HO6cdi4LRKIPFUF7pfEuBZaBuxRtjtX9EO6pgEOTOY4jom7TanN9Cokcp5TcjqJ1NgWF8u8yq7YvFDreCtWmvmOObvOVJiFgP1oJy0)
